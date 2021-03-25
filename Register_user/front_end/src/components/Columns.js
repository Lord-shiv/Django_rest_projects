// import { format } from 'date-fns'

export const COLUMNS = [
    {
        Header: 'Id',
        // Footer: 'Id',
        accessor: 'id',
        // disableFilters: true,
        // sticky: 'left'
    },
    {
        Header: 'First Name',
        // Footer: 'First Name',
        accessor: 'first_name',
        // sticky: 'left'
    },
    {
        Header: 'Last Name',
        // Footer: 'Last Name',
        accessor: 'last_name',
        // sticky: 'left'
    },
    {
        Header: 'Email',
        // Footer: 'Date of Birth',
        accessor: 'email',
        // Cell: ({ value }) => {
        //   return format(new Date(value), 'dd/MM/yyyy')
        // }
    },
    {
        Header: 'Gender',
        // Footer: 'Country',
        accessor: 'gender'
    },
    {
        Header: 'Phone',
        // Footer: 'Phone',
        accessor: 'phone'
    },
    {
        Header: 'Profile_pic',
        Footer: 'Email',
        accessor: 'profile_pic'
    },
    {
        Header: 'Salary',
        // Footer: 'Age',
        accessor: 'salary'
    },
    {
        Header: 'Resume',
        // Footer: 'Age',
        accessor: 'docs'
    },
    {
        Header: 'Position',
        // Footer: 'Age',
        accessor: 'status'
    },
]