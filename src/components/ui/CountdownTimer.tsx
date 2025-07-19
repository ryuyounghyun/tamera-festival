import { useState, useEffect } from 'react';
import { calculateTimeLeft, type TimeLeft } from '../../lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
}

const CountdownTimer = ({ targetDate, title = "대회까지 남은 시간" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: '일', value: timeLeft.days },
    { label: '시간', value: timeLeft.hours },
    { label: '분', value: timeLeft.minutes },
    { label: '초', value: timeLeft.seconds }
  ];

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isExpired) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <div className="text-xl text-ocean-600 font-semibold">
          대회가 시작되었습니다!
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="flex justify-center items-center space-x-4 sm:space-x-8">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-3 sm:p-6 min-w-[60px] sm:min-w-[80px]">
              <div className="text-2xl sm:text-4xl font-bold text-ocean-600">
                {unit.value.toString().padStart(2, '0')}
              </div>
            </div>
            <div className="text-sm sm:text-base font-medium text-gray-600 mt-2">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer; 