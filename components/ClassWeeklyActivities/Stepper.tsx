import React from 'react';

interface IStepperProps {
  type: 'first' | 'middle' | 'last';
  fillType?: 'done' | 'current' | 'default';
  setCurrent: () => void;
}

const Stepper = ({ type, fillType = 'default', setCurrent }: IStepperProps) => {
  return (
    <>
      <svg
        onClick={setCurrent}
        style={{ cursor: 'pointer', minWidth: '24px', maxHeight: '24px' }}
        viewBox="0 0 87 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1701_18110)">
          {type != 'last' && (
            <path
              d="M86.7998 12L43.6998 12"
              stroke={(fillType != 'default' && type == 'first') || fillType == 'done' ? '#3959FF' : '#DEE7EE'}
              strokeWidth="2"
            />
          )}
          {type != 'first' && (
            <path d="M43.6992 12L0.599222 12" stroke={fillType != 'default' ? '#3959FF' : '#DEE7EE'} strokeWidth="2" />
          )}
          <path
            d="M42.1854 -0.585788C42.9664 -1.36684 44.2328 -1.36683 45.0138 -0.585786L56.1854 10.5858C56.9664 11.3668 56.9664 12.6332 56.1854 13.4142L45.0138 24.5858C44.2328 25.3668 42.9664 25.3668 42.1854 24.5858L31.0138 13.4142C30.2328 12.6332 30.2328 11.3668 31.0138 10.5858L42.1854 -0.585788Z"
            fill="white"
          />
          {fillType == 'current' && (
            <path
              d="M44.3067 2.12132L53.4783 11.2929C53.8688 11.6834 53.8688 12.3166 53.4783 
          12.7071L44.3067 21.8787C43.9162 22.2692 43.283 22.2692 42.8925 21.8787L33.7209 12.7071C33.3304
           12.3166 33.3304 11.6834 33.7209 11.2929L42.8925 2.12132C43.283 1.7308 43.9162 1.7308 44.3067 2.12132Z"
              fill="white"
              stroke="#3959FF"
              strokeWidth="2"
            />
          )}
          {fillType == 'default' && (
            <path
              d="M44.3067 2.12132L53.4783 11.2929C53.8688 11.6834 53.8688 12.3166 53.4783 12.7071L44.3067 21.8787C43.9162 
           22.2692 43.283 22.2692 42.8925 21.8787L33.7209 12.7071C33.3304 
          12.3166 33.3304 11.6834 33.7209 11.2929L42.8925 2.12132C43.283 1.7308 43.9162 1.7308 44.3067 2.12132Z"
              fill="#DEE7EE"
            />
          )}
          {fillType == 'done' && (
            <path
              d="M44.3067 2.12132L53.4783 11.2929C53.8688 11.6834 53.8688 12.3166 53.4783 12.7071L44.3067 21.8787C43.9162 
           22.2692 43.283 22.2692 42.8925 21.8787L33.7209 12.7071C33.3304 
          12.3166 33.3304 11.6834 33.7209 11.2929L42.8925 2.12132C43.283 1.7308 43.9162 1.7308 44.3067 2.12132Z"
              fill="#3959FF"
            />
          )}
        </g>
        <defs>
          <clipPath id="clip0_1701_18110">
            <rect width="86.2" height="24" fill="white" transform="translate(0.599609)" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Stepper;
