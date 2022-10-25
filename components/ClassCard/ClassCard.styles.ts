import styled from 'styled-components';

export const Container = styled.div<{ locked: boolean; current?: boolean }>`
  padding: ${(props) => (!props.locked ? '33.8px 38px' : '85px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background: ${(props) => (props.locked ? 'white' : '#f2f7fc')};
  /* Neutral / N-2 */

  border: ${(props) => (props.current ? ' 2px solid #3959FF' : '1px solid #dee7ee')};
  border-radius: 24px;
  cursor: pointer;
`;
export const Division = styled.div`
  color: #595a6c;

  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  padding: 4px 8px;
  border: 1px solid #595a6c;
  border-radius: 12px;
`;

export const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

export const InfoModule = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232339;
`;

export const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #232339;
  max-width: 222px;
`;

export const ModuleDuration = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #adb3cf;
`;

export const CheckButton = styled.div`
  padding: 15.5px 67px;
  background-color: white;
  color: #232339;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;

  border-radius: 12px;
  border: 1px solid #dee7ee;
`;
export const JoinButton = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #ffffff;

  padding: 15.5px 29px;
  background: linear-gradient(90deg, #3870ff 0%, #3844ff 100%);
  border-radius: 12px;
`;

export const LockedInfo = styled.div`
  display: flex;
  align-items: center;
  /* padding: 10px 47px; */
  flex-direction: column;
`;

export const LockedModule = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #adb3cf;
`;

export const LockedTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #adb3cf;
`;
