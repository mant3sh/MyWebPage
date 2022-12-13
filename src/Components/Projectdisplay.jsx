import React from "react";
import "./projectdisplay.css";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
function Projectdisplay(props) {
  return (
    <div className="project ">
      <div className="domain w-ful p-1">
        <div className="dots mt-[1px] flex gap-1">
          <div className="dot  bg-[#c94645]"></div>
          <div className="dot bg-[#e4c36e]"></div>
          <div className="dot bg-[#89cf8d]"></div>
        </div>
      </div>
      <div className="bg-[#edf1ff]  dark:bg-[#22223b]">
        <h1 className=" font-bold text-xl sm:text-3xl pt-3 pb-3 ">
          {props.title}
        </h1>

        <img className="projectimgage" src={props.image} />

        <div className="des  mt-3 bg-[#ade8f4] flex dark:bg-[#edf1ff] dark:text-[#22223b]">
          <div className="flex flex-col justify-center mr-3">
            <svg
              stroke="#ade8f4"
              fill="#7b61ff"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
          </div>
          <div className="dess flex-1 text-sm sm:text-base text-left ">
            {props.des}
          </div>
        </div>
        <div className="flex mt-3 mx-0 w-90 justify-center p-2  gap-5">
          <a
            className="ap flex gap-1 text-[#314e89] dark:text-light-text"
            href={`${props.links.github}`}
            target="_blank"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 256 249"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="currentColor">
                <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
              </g>
            </svg>{" "}
            Github
          </a>
          <a
            className="ap flex gap-1 text-[#314e89] dark:text-light-text "
            href={`${props.links.live}`}
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1"
            >
              <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z" />
            </svg>
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projectdisplay;
