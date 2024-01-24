import { useState, } from 'react';

type PersonnalisedButtonProps = {
    buttonText: any;
}

const PersonnalisedButton = ({buttonText}: PersonnalisedButtonProps) => {

    const [buttonClicked, setButtonClicked] = useState<boolean>(false);

    const handleClick = () => {
        setButtonClicked(true)

        setTimeout(() => {
            setButtonClicked(false);
        }, 500);
    }

  return (
    <div>
      <a
        // className="relative bg-gradient-to-r from-black/60 to-98% to-black/40 p-4  rounded-3xl cursor-pointer my-10   major"
        className="relative bg-black/50 p-4  rounded-3xl cursor-pointer my-10   major"
        onClick={() => {handleClick()}}
      >
        <span className={`flex items-center justify-center absolute inset-0 bg-white text-black border border-black  rounded-3xl transform  ${buttonClicked ? '-translate-y-0.5' : '-translate-y-2'} transition ease-in-out duration-50`}>
          <div className='hover:-translate-y-0.5 transition ease-in-out duration-50'>
          {buttonText}
          </div>
        </span>
        {buttonText}
      </a>
    </div>
  );
};

export default PersonnalisedButton;
