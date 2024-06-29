import {useUser} from "@clerk/clerk-react"
import { FinancialRecordForm } from "./financial-form";
import { FinancialRecordList } from "./financial-record";



export const Dashboard = () => {
 
  const {user} = useUser();
  return (
    <div className="dashboard-container">
        <h1>Welcome {user?.firstName}! Here is your finances</h1>
        <FinancialRecordForm/>
        <FinancialRecordList/>
        
    </div>
  );
};