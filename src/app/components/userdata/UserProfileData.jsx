import { editIcon } from "@/app/data"
import Button from "../button"
import TextComp from "../text"

const UserProfileData = ({
  val,
  ...restProps
}) => {
  return (
    <div {...restProps} className={`${restProps.className}   flex flex-col md:flex-row justify-between items-center gap-5 flex-1 h-[80px] `}>

      <div className="  flex flex-row md:flex-col w-auto  justify-between items-start gap-[9px]">

        <TextComp as="p" className="text-gray-900 font-bold w-[60%] sm:w-auto"> {val.firstname} :-  </TextComp>
        <TextComp as="p" className="text-gray-900"> {val.secname} </TextComp>

      </div>

      <Button
        color=""
        variant="outline"
        className="min-w-[140px] gap-2 flex items-center rounded-[10px]"
      >
        <span>{editIcon}</span>
        {val.editButtonText}
      </Button>

    </div>
  )
}

export default UserProfileData