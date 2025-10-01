import { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import { getAccessToken, setAccessToken, logout } from "./authService";
import type { User, UserDetails } from "../../type";

type AuthContextType = {
  user: (User & UserDetails) | null;
  token: string | null;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Инициализация user из localStorage, если есть
  const [user, setUser] = useState<(User & UserDetails) | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setTokenState] = useState<string | null>(getAccessToken());

  // Синхронизация user с localStorage при изменении user
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // при монтировании попробуем подтянуть пользователя
  useEffect(() => {
    if (token) {
      // user?.id предпочтительнее, если нет - пробуем user?.user?.id
      const userId = user?.id || user?.user?.id;
      if (userId) {
        api
          .get(`/users/${userId}/details`)
          .then((res) => {
            setUser(res.data.data);
            localStorage.setItem("user", JSON.stringify(res.data.data));
          })
          .catch(() => {
            logout();
            setUser(null);
            setTokenState(null);
          });
      }
    }
  }, [token]);

  const login = async (login: string, password: string) => {
    const res = await api.post("/auth/login", { login, password });

    const { user } = res.data.data;
    const { token } = res.data.data.session;

    if (token && user) {
      setAccessToken(token);
      setTokenState(token);
      setUser(user);
      // user будет синхронизирован с localStorage через useEffect
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
    setTokenState(null);
    // user будет удалён из localStorage через useEffect
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
