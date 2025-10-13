const isServerEnv = typeof window === "undefined";

const isClientEnv = typeof window !== "undefined";

const isDevelopmentEnv = process.env.NODE_ENV !== "production";

const isProductionEnv = process.env.NODE_ENV === "production";

export { isClientEnv, isDevelopmentEnv, isProductionEnv, isServerEnv };
