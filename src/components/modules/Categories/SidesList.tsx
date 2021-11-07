import { FC, useMemo } from 'react';
import useFetchingData, {
  FUseFetchingDataArgs,
} from '../../../hooks/useFetchingData';
import Loading from '../../images/icons/Loading';
import Section from '../Section';
import HeaderTwo from '../../elements/HeaderTwo';
import { fetchSidesData } from '../../../_constants/urls';
import { SideType } from '../../../_types/components';
import CartCard from '../../elements/Cards/CartCard';

const SidesList: FC = () => {
  const {
    data: sidesList,
    loading,
    error,
  } = useFetchingData(fetchSidesData as unknown as FUseFetchingDataArgs);

  const sidesTitle = 'Sides';

  const allSides = useMemo(
    () =>
      sidesList &&
      sidesList.map((side) => (
        <CartCard key={side.id} item={side as SideType} />
      )),
    [sidesList]
  );

  if (error)
    return (
      <Section className='items-center flex-1'>
        <p className='text-xl text-red-600 font-semibold'>
          Error ! We cannot find the data. {error}
        </p>
      </Section>
    );

  if (loading)
    return (
      <Section className='items-center flex-1'>
        <Loading />
      </Section>
    );

  return (
    <Section>
      <HeaderTwo text={sidesTitle} />
      <div className='grid grid-cols-1 my-8 gap-8 items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {allSides}
      </div>
    </Section>
  );
};
export default SidesList;