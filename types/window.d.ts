interface Window {
  gtag: (
    command: string,
    targetOrAction: string,
    params?: Record<string, unknown>
  ) => void;
}
