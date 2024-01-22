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
        className="relative bg-black/50 p-4  rounded-full cursor-pointer my-10  major"
        onClick={() => {handleClick()}}
      >
        <span className={`flex items-center justify-center absolute inset-0 bg-white text-black border border-black  rounded-full transform -translate-y-0.5 hover:-translate-y-2${buttonClicked ? '-translate-y-0.5' : ''} transition ease-in-out duration-50`}>
          {buttonText}
        </span>
        {buttonText}
      </a>
    </div>
  );
};

export default PersonnalisedButton;
