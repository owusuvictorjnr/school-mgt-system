import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, lessonsData, role, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },

  {
    header: "Class",
    accessor: "class",
  },

  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const LessonListPage = () => {
  const renderRow = (item: Lesson) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-vPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <Link href={`/list/student/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-skyBlue">
              <Image src="/view.png" width={16} height={16} alt="view" />
            </button>
          </Link>

          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-vPurple">
              <Image src="/delete.png" width={16} height={16} alt="delete" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flow-row items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-4   self-end">
            <TableSearch />
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/filter.png" width={14} height={14} alt="filter" />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/sort.png" width={14} height={14} alt="sort" />
            </button>

            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
                <Image src="/plus.png" width={14} height={14} alt="plus" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default LessonListPage;
