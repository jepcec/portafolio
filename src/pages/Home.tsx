import Button from "../components/Button";
function Home()
{
return (
    <div className="h-screen flex flex-col overflow-hidden">
        <div className="h-12 mt-2 mx-2 rounded-xl dark:bg-gray-800 flex items-center justify-center gap-x-12">
            <Button />
            <Button />
            <Button />
        </div>

        <div className="flex-1 overflow-y-auto ">
            {/* Aquí va todo tu contenido que puede crecer */}
            <p>... mucho contenido ...</p>

        </div>
        <div className="h-12 dark:bg-gray-800">
            Footer
        </div>
    </div>

);

}
export default Home;