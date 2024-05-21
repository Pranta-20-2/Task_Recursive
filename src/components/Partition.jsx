import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const Partition = ({ id, color, width, height, onSplit, onRemove, onResize }) => {
    return (
        <ResizableBox
            width={width}
            height={height}
            minConstraints={[100, 100]}
            className="border"
            onResizeStop={(e, { size }) => onResize(id, size.width, size.height)}
        >
            <div style={{ backgroundColor: color }} className="flex flex-col justify-center items-center w-full h-full">
                <div className="flex items-center justify-around w-full h-full">
                    <button
                        className=" p-1 bg-gray-700 text-white"
                        onClick={() => onSplit(id, 'V')}
                    >
                        V
                    </button>
                    <button
                        className=" p-1 bg-gray-700 text-white"
                        onClick={() => onSplit(id, 'H')}
                    >
                        H
                    </button>
                </div>
                <div>
                    <button
                        className=" m-2 px-2 bg-red-500 text-white"
                        onClick={() => onRemove(id)}
                    >
                        -
                    </button>
                </div>
            </div>
        </ResizableBox>
    );
};

export default Partition;
