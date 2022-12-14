import Link from "next/link";
import { Text, HStack } from "@chakra-ui/react";

const Logo = () => {
  return (
    <>
      <HStack>
        <Link href="/">
          <img
            src="https://tallysight.com/ts-logo.png"
            alt="logo"
            width={30}
            height={30}
          />
        </Link>
        <Text fontWeight={"extrabold"} className="mx-1 font-black">
          Tallysight
        </Text>
      </HStack>
    </>
  );
};

export default Logo;
