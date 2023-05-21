import Link from "next/link";

interface Breadcrumb {
    title: string;
    to: string;
    active: boolean
}
interface BreadcrumbsProps {
    data: Breadcrumb[];
}

// const data: Crumbs[] = [{ title: "users", to: "/dashboard/users", active: false },
//      { title: "All Members", to: "/dashboard/users", active: false },
//      { title: "add Member", to: "/dashboard/users/addNewMember", active: true }
// ]

function Breadcrumbs({ data }: BreadcrumbsProps) {
    return (
        <ul className="breadcrumbs" style={{paddingRight: 0, paddingLeft:0}}>
            {data?.map((ele: any) => {
                return (
                    <Link href={ele.to} style={{color: ele?.active ? "#000" : "rgba(119, 119, 119, 1)"}}>
                        {ele.title} {!ele.active && <span style={{color: ele?.active ? "#000" : "rgba(119, 119, 119, 1)"}}> \ </span>}
                    </Link>
                )
            })}
        </ul>
    );
}
export default Breadcrumbs;