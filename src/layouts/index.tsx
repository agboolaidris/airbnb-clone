import React, { ReactNode } from 'react';
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2';
import { Button } from '@ui/buttons';
import classNames from 'classnames';
import { useScrollPosition } from 'src/hooks/useScrollPosition';
import { filters } from 'src/lib/filters';

import { FilterTabs } from './commons/FilterTabs';
import { Footer } from './commons/Footer';
import { Navbar } from './commons/Navbar';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { y } = useScrollPosition();
  return (
    <div>
      <div className="fixed top-0 z-50 w-full bg-white">
        <Navbar />
        <div className={classNames({ shadow: y > 100 })}>
          <div className="wrapper  flex items-center gap-x-6">
            <div className="flex-1">
              <FilterTabs href="" tabs={filters} />
            </div>
            <Button
              className="hidden items-center gap-x-2 !border-gray-200 !px-3 text-sm text-gray-700 hover:bg-transparent lg:flex"
              variants="secondary"
            >
              <HiOutlineAdjustmentsHorizontal className="h-5 w-5" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-20 mt-40">{children}</div>

      <Footer />
    </div>
  );
};
