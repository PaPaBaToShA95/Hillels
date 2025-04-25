const LoadingIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-8 justify-center space-y-4">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-blue-500 font-medium">Завантаження...</p>
    </div>
  );
};

export default LoadingIndicator;