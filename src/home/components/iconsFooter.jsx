import { easeInOut, motion, useAnimation } from "motion/react";
console.debug(motion);

const pathVariant = {
  normal: { pathLength: 1, opacity: 1, pathOffset: 0, fillOffset: 0 },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
    pathOffset: [1, 0],
    fillOffset: [1, 0],
  },
};

const circleVariant = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [0, 1],
  },
};

// Instagram animateds icons
export const LocationIcon = ({ size = "40px" }) => {
  const controls = useAnimation();

  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          animate={controls}
          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
          stroke="#ac866d"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          animate={controls}
          d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
          stroke="#ac866d"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </motion.svg>
    </div>
  );
};

export const InstagramIcon = ({ size = "40px" }) => {
  const controls = useAnimation();

  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.5,
            delay: 0,
          }}
          animate={controls}
          d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z"
          stroke="#ac866d"
        />
      </motion.svg>
    </div>
  );
};

export const PhoneIcon = ({ size = "40px" }) => {
  const controls = useAnimation();

  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => {
        controls.start("normal");
      }}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
          fill="#ac866d"
        />

        <motion.path
          variants={circleVariant}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          animate={controls}
          d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95"
          fill="none"
          stroke="#ac866d"
          stroke-width="2"
          stroke-linecap="round"
        />

        <motion.path
          variants={circleVariant}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
          animate={controls}
          d="M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94"
          fill="none"
          stroke="#ac866d"
          stroke-width="2"
          stroke-linecap="round"
        />
      </motion.svg>
    </div>
  );
};

export const EmailIcon = ({ size = "40px" }) => {
  const controls = useAnimation();

  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.3,
            delay: 0,
          }}
          animate={controls}
          d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
          stroke="#ac866d"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.7,
            delay: 0,
            ease: "easeInOut",
          }}
          animate={controls}
          d="M18.7698 7.7688L13.2228 12.0551C12.5025 12.6116 11.4973 12.6116 10.777 12.0551L5.22998 7.7688"
          stroke="#ac866d"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </motion.svg>
    </div>
  );
};

export const WhatsappIcon = ({ size = "40px" }) => {
  const controls = useAnimation();

  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width={size}
        height={size}
        strokeWidth={"2"}
        stroke="#ac866d"
        fill={"none"}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 32 32">
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.7,
            delay: 0,
            ease: "easeInOut",
          }}
          animate={controls}
          d="M17,1C9.3,1,3,7.3,3,15c0,3.4,1.3,6.6,3.3,9L4,31l7.3-3.2C13,28.6,15,29,17,29c7.7,0,14-6.3,14-14S24.7,1,17,1z"
        />

        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.7,
            delay: 0,
            ease: "easeInOut",
          }}
          animate={controls}
          d="M23.7,19.1c0.3-0.9,0.3-1.6,0.2-1.8c-0.1-0.2-0.3-0.2-0.7-0.4c-0.4-0.2-2.2-1.1-2.5-1.2
			c-0.3-0.1-0.7-0.1-0.9,0.3c-0.4,0.5-0.7,1-1,1.3c-0.2,0.2-0.6,0.3-0.9,0.1c-0.4-0.2-1.6-0.6-3-1.8c-1.1-1-1.8-2.2-2.1-2.6
			c-0.2-0.4,0-0.6,0.2-0.8c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.3-0.3,0.4-0.6c0.1-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.8-2-1.1-2.7
			c-0.2-0.6-0.4-0.6-0.8-0.6c-0.1,0-0.3,0-0.4,0c-0.5,0-1,0.1-1.3,0.5C9.9,7.9,9,8.8,9,10.6c0,1.8,1.3,3.6,1.5,3.8
			c0.2,0.2,2.6,4,6.3,5.6c2.9,1.2,3.8,1.1,4.4,1C22.2,20.7,23.4,20,23.7,19.1L23.7,19.1z"
        />
      </motion.svg>
    </div>
  );
};

export const TelegramIcon = ({ size = "40px", stroke = "#ac866d", strokeWidth = 18 }) => {
  const controls = useAnimation();
  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        fill="none">
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.7,
            delay: 0,
            ease: easeInOut,
          }}
          animate={controls}
          stroke={stroke}
          strokeWidth={strokeWidth}
          d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"
        />
      </motion.svg>
    </div>
  );
};

export const GithubIcon = ({
  size = "40px",
  stroke = "#ac866d",
  strokeWidth = 2,
}) => {
  const controls = useAnimation();
  return (
    <div
      className="w-fit h-fit"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={pathVariant}
          transition={{
            duration: 0.7,
            delay: 0,
            ease: "easeInOut",
          }}
          animate={controls}
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          stroke-linejoin="round"
        />
      </motion.svg>
    </div>
  );
};
