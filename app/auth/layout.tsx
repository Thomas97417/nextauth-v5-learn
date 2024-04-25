const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};

export default AuthLayout;
