import Link from "next/link";

interface Breadcrumb {
    title: string;
    to: string;
  }
interface BreadcrumbsProps {
    data: Breadcrumb[];
  }
function Breadcrumbs({ data } : BreadcrumbsProps) {
    return (
        <ul className="breadcrumbs">
            {data?.map((ele: any) => {
                return (<Link href="/dashboard/products" className="">
                    products
                </Link>)
            })}
        </ul>
    );
}
export default Breadcrumbs;