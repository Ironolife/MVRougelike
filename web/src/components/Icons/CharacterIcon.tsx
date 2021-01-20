import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import SvgIcon, {
  SvgIconProps,
  SvgIconTypeMap
} from "@material-ui/core/SvgIcon";

const CharacterIcon: OverridableComponent<SvgIconTypeMap> = (
  props: SvgIconProps
) => {
  return (
    <SvgIcon {...props}>
      <path d="M13 3C9.2 3 6.2 5.9 6 9.7L4.1 12.2C3.9 12.5 4.1 13 4.5 13H6V16C6 17.1 6.9 18 8 18H9V21H16V16.3C18.4 15.2 20 12.8 20 10C20 6.1 16.9 3 13 3" />
    </SvgIcon>
  );
};

export default CharacterIcon;