import styled from 'styled-components';
import defaultTheme from 'modules/ThemeModule/themes/default.json';
import Image from 'next/image';

const colors = {
  cyan: 'linear-gradient(180deg, #38c9ff 0%, #32a5e6 100%)',
  yellow: 'linear-gradient(180deg, #f8cd46 0%, #d9b33d 100%)',
  purple: 'linear-gradient(180deg, #cf75ff 0%, #a65ecc 100%)',
  red: 'linear-gradient(180deg, #D94261 0%, #CC3F5B 100%)',
  green: 'linear-gradient(180deg, #5ECC90 0%, #46996C 100%)',
  undefined: 'linear-gradient(180deg, #38c9ff 0%, #32a5e6 100%)'
};

export const Container = styled.div<{
  type: 'active' | 'enrolled' | 'completed';
  color: 'cyan' | 'yellow' | 'purple' | 'red' | 'green' | undefined;
}>`
  z-index: 9;
  background: ${(props) => colors[`${props.color}`]};
  width: ${(props) => (props.type === 'active' ? '596' : '282')}px;
  border-radius: 24px;
  border: 1px solid rgba(35, 35, 57, 0.16);
`;
export const Card = styled.div`
  border-radius: 24px;
  width: inherit;
  height: inherit;
  background-image: url('/assets/images/icons/common/polygon.svg');
  background-repeat: no-repeat;
  overflow: hidden;

  z-index: 1;
  color: ${defaultTheme.color.neutrals.white};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 318px;
  /* justify-content: space-around; */
  padding: 24px 0px 24px 24px;
`;
export const CardHeader = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
`;

export const CardFooter = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const Icon = styled(Image)`
  position: relative;
  overflow: hidden;
  left: -50%;
  bottom: 0;
  /* object-fit:  contain; */
  /* left: -100% ; */
`;

export const Info = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;