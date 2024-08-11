import React, { useState } from 'react';
import moment from 'moment-timezone';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TimeZoneDisplay from './TimeZoneDisplay';
import AddTimeZone from './AddTimeZone';

const TimeZoneConverter = () => {
  const [timeZones, setTimeZones] = useState(['UTC', 'Asia/Kolkata']);
  const [currentTime, setCurrentTime] = useState(moment());

  const handleTimeZoneAddition = (timeZone) => {
    setTimeZones([...timeZones, timeZone]);
  };

  const handleTimeZoneDeletion = (index) => {
    setTimeZones(timeZones.filter((_, i) => i !== index));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(timeZones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTimeZones(items);
  };

  return (
    <div>
      <h1>Time Zone Converter</h1>
      <AddTimeZone onAdd={handleTimeZoneAddition} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {timeZones.map((zone, index) => (
                <Draggable key={zone} draggableId={zone} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TimeZoneDisplay
                        timeZone={zone}
                        currentTime={currentTime}
                        onDelete={() => handleTimeZoneDeletion(index)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TimeZoneConverter;
