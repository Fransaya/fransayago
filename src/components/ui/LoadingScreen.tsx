type loadingPropt = {
  isLoading: boolean;
};

// Componente de carga
const LoadingScreen = ({ isLoading }: loadingPropt) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="text-center">
        <div className="relative flex items-center justify-center w-24 h-24 mb-8">
          <div className="absolute w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div
            className="absolute w-24 h-24 border-4 border-purple-500 border-b-transparent rounded-full animate-spin"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Francisco Sayago</h2>
        <p className="text-blue-300 animate-pulse">Cargando experiencia...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
