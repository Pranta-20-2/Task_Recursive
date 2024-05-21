import { useState } from 'react';
import Partition from './Partition';
const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color);
    }
    return color;
    
};
const ContainerPartition = () => {
    const [partitions, setPartitions] = useState([
        { id: 1, color: randomColor(), width: 300, height: 300 },
    ]);

    const splitPartition = (id, direction) => {
        setPartitions((prevPartitions) => {
            const index = prevPartitions.findIndex((p) => p.id === id);
            const partition = prevPartitions[index];
            const newPartition = {
                id: prevPartitions.length + 1,
                color: randomColor(),
                width: partition.width,
                height: partition.height,
            };

            let newPartitions = [...prevPartitions];
            newPartitions.splice(index, 1,
                {
                    ...partition, [direction === 'V' ? 'width' : 'height']: partition[direction === 'V' ? 'width' : 'height'] / 2,
                },
                {
                    ...newPartition,
                    [direction === 'V' ? 'width' : 'height']: partition[direction === 'V' ? 'width' : 'height'] / 2,
                });

            return newPartitions;
        });
    };

    const removePartition = (id) => {
        setPartitions((prevPartitions) => prevPartitions.filter((p) => p.id !== id));
    };

    const resizePartition = (id, width, height) => {
        setPartitions((prevPartitions) => prevPartitions.map((p) => (p.id === id ? { ...p, width, height } : p)));
    };

    return (
        <div className="flex flex-wrap">
            {partitions.map((partition) => (
                <Partition
                    key={partition.id}
                    color={partition.color}
                    id={partition.id}
                    width={partition.width}
                    height={partition.height}
                    onSplit={splitPartition}
                    onRemove={removePartition}
                    onResize={resizePartition}
                />
            ))}
        </div>
    );
};

export default ContainerPartition;