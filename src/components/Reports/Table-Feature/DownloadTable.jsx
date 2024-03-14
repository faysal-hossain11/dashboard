import { Icon } from "@iconify/react";
import { useState } from 'react';

const DownloadTable = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = () => {
        setIsShown(current => !current);
    };
    return (
        <div>
            <button className="p-[14px] bg-[#F3F3F3] rounded-[10px]" onClick={handleClick}>
                <Icon icon="ion:cloud-download-sharp" />
            </button>
            <div>
                {isShown && (
                    <div>
                        <button className="py-2 px-[15px] bg-[#F3F3F3] hover:bg-white transition-all duration-300 shadow-sm shadow-white font-primaryFont text-primaryColor font-normal text-[14px] absolute mt-2 rounded-[10px]">Download CSV</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DownloadTable;