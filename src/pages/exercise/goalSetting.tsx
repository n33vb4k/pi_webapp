import React from 'react';
import './goalSetting.scss';

interface GoalSettingProps {
  timeframe: string;
  setTimeframe: (value: string) => void;
  exercisegoaltype: string;
  setExercisegoal: (value: string) => void;
  amount: number;
  setAmount: (value: number) => void;
  handle_goalsubmit: () => void;
}

const GoalSetting = ({
  timeframe,
  setTimeframe,
  exercisegoaltype,
  setExercisegoal,
  amount,
  setAmount,
  handle_goalsubmit,
}: GoalSettingProps) => {
  return (
    <div className="goal">
      <div className="goalsetting">
        <h2>Goal Setting</h2>
        <div className="selections">
          <div className="selection-row">
            <div className="selectionstimeframe">
              <label>Goal Timeframe</label>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="da">Daily</option>
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
                <option value="year">Yearly</option>
              </select>
            </div>
            <div className="selectionsvari">
              <label>Goal Type</label>
              <select
                value={exercisegoaltype}
                onChange={(e) => setExercisegoal(e.target.value)}
              >
                <option value="calorie">Calories Burnt</option>
                <option value="activitytime">Activity Time</option>
              </select>
            </div>
          </div>
          <div className="selectionsamo">
            <label>Select Goal</label>
            <input
              value={amount ? amount : ''}
              type='number'
              onChange={(e) => setAmount(e.target.value as unknown as number)}
            />
          </div>
          <button className='submit' onClick={handle_goalsubmit}>
            Set Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalSetting;