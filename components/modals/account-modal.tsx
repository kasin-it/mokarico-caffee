import { useAccountModal } from '@/app/hooks/use-account-modal';
import { useSupabse } from '@/app/hooks/use-supabse';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function AccountModal() {
  const accountModal = useAccountModal();
  const router = useRouter();
  const supabse = useSupabse();

  const handlClick = () => {
    supabse.supabse.auth.signOut();
    router.refresh();
  };
  return (
    <div
      className={cn(
        'w-[200px] h-[150px] absolute top-[50px] right-16 flex items-center justify-center',

        accountModal.isOpen ? '' : 'hidden',
      )}
      onMouseOver={accountModal.onOpen}
      onMouseLeave={accountModal.onClose}
    >
      <ul className="text-gray-500 bg-white border border-gray-500 p-5">
        <li className="hover:text-black transition cursor-pointer">
          <Link href={'/my_account'}>My Account</Link>
        </li>
        <li
          className="hover:text-black transition cursor-pointer"
          onClick={handlClick}
        >
          Sign Out
        </li>
      </ul>
    </div>
  );
}
export default AccountModal;
