import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className="h-[80vh]">
				<div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-dashed dark:border-violet-400"></div>
			</div>
		);
	}

	if (user && user?.email) {
		return children;
	}

	return <Navigate to="/login" replace />;
};

export default PrivateRoute;
