const Article = ({ articles }) => {
    return (


        <div className="relative overflow-x-auto max-w-3xl border mx-auto ">
            <div className="w-full ">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-white  dark:bg-gray-700 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Upvotes
                            </th>
                            <th scope="col" className="px-1 py-3">
                                Issued Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Space, the final frontier. There's always something new to discover beyond our planet.
                            </td>
                            <td className="px-6 py-4">
                                2999
                            </td>
                            <td className="px-1 py-4">
                                2020-10-1
                            </td>
                        </tr>
                        <tr className="border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                Space, the final frontier. There's always something new to discover beyond our planet.
                            </td>
                            <td className="px-6 py-4">
                                2999
                            </td>
                            <td className="px-1 py-4">
                                2020-10-1
                            </td>
                        </tr>
                        <tr className="">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Space, the final frontier. There's always something new to discover beyond our planet.
                            </td>
                            <td className="px-6 py-4">
                                2999
                            </td>
                            <td className="px-1 py-4">
                                2020-10-1
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Article;