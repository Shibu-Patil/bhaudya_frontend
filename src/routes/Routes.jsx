import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import DashBoard from "../components/DashBoard/DashBoard";
import AddCompanies from "../components/DashBoard/companies/addComapanies/AddCompanies";
import Company from "../components/DashBoard/companies/Company";
import ShowCompanies from "../components/DashBoard/companies/showCompanies/ShowCompanies";
import Employess from "../components/DashBoard/employees/Employess";
import Designation from "../components/DashBoard/designations/Designation";
import AddDesignation from "../components/DashBoard/designations/addDesignation/AddDesignation";
import ShowDesignation from "../components/DashBoard/designations/showDesignation/ShowDesignation";
import AddEmployee from "../components/DashBoard/employees/addEmployee/AddEmployee";
import ShowEmployees from "../components/DashBoard/employees/showEmployees/ShowEmployees";
import Attendance from "../components/DashBoard/attandance/Attandance";
import AddAttendance from "../components/DashBoard/attandance/addAttendance/AddAttendance";
import ShowAttendance from "../components/DashBoard/attandance/showAttendance/ShowAttendance";
import Salary from "../components/DashBoard/salary/Salary";
import AddSalary from "../components/DashBoard/salary/addSalary/AddSalary";
import ShowSalary from "../components/DashBoard/salary/showSalary/ShowSalary";
import CalculateSalary from "../components/DashBoard/salary/calculateSalary/CalculateSalary";


const routes=createBrowserRouter([
    {
        path:"/",
        element:<Login></Login>
    },{
        path:"/register",
        element:<Register></Register>,
    },{
        path:"/home",
        element:<DashBoard></DashBoard>,
        children:[
            {
                
                element:<Company></Company>,
                children:[
                    {
                        index:true,
                        element:<AddCompanies></AddCompanies>
                    },                    {
                       path:"show-companies",
                        element:<ShowCompanies></ShowCompanies>
                    }
                ]
            },{
                path:"add-des",
                element:<Designation></Designation>,
                    children:[
                    {
                        index:true,
                        element:<AddDesignation></AddDesignation>
                    },                    {
                       path:"show-designation",
                        element:<ShowDesignation></ShowDesignation>
                    }
                ]
            },
            {
                path:"emp",
                element:<Employess></Employess>,
                    children:[
                    {
                        index:true,
                        element:<AddEmployee></AddEmployee>
                    },                    {
                       path:"show-emp",
                        element:<ShowEmployees></ShowEmployees>
                    }
                ]
            },
            {
                path:"add-attandance",
                element:<Attendance></Attendance>,
                    children:[
                    {
                        index:true,
                        element:<AddAttendance></AddAttendance>
                    },                    {
                       path:"show-attandance",
                        element:<ShowAttendance></ShowAttendance>
                    }
                ]
            },
            {
                path:"salary",
                element:<Salary></Salary>,
                    children:[
                    {
                        index:true,
                        element:<AddSalary></AddSalary>
                    },                    {
                       path:"show-salary",
                        element:<ShowSalary></ShowSalary>
                    },                    {
                       path:"calculate-salary",
                        element:<CalculateSalary></CalculateSalary>
                    }
                ]
            }
        ]
    }
])

export default routes