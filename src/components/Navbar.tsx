import clsx from 'clsx';

export default function Navbar() {
  return (
      <div className={clsx('Navbar',
          'navbar absolute top-0',
          'flex justify-between')}>
        <button className={'btn btn-ghost normal-case text-xl'}>
          Todo List App
        </button>
      </div>
  );
}