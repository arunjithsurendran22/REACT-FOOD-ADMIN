import Admin from '../components/shared/Admin';
import DashboardStatus from '../components/shared/DashboardStatus';
const AdminDashboard = () => {
    return (
        <div className='bg-black h-screen'>
            <DashboardStatus/>  
            <Admin/>
        </div>
    );
}

export default AdminDashboard;
