import { Image, ImageProps } from "react-native";

type WImageProps = Pick<ImageProps, "style" | "width" | "height" | "source"> & {
  isRound?: boolean;
};

export const WImage = ({
  style,
  width = 100,
  height = 100,
  source,
  isRound,
}: WImageProps) => {
  return (
    <Image
      style={[{ width, height }, style]}
      width={width}
      height={height}
      resizeMode="stretch"
      source={
        source ??
        (isRound ? require("./w-image-round.png") : require("./w-image.png"))
      }
    />
  );
};
