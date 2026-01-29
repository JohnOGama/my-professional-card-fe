const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default ProtectedLayout;
