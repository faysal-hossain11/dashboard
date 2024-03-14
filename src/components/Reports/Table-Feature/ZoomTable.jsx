import { Icon } from '@iconify/react';

const ZoomTable = () => {
    return (
        <div>
            <button className="p-[12px] bg-[#F3F3F3] rounded-[10px] ">
                <Icon icon="material-symbols:zoom-out-map-rounded" className='text-[20px]'/>
            </button>
        </div>
    );
};

export default ZoomTable;