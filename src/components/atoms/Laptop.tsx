import React from "react";
import styled from "styled-components";

const SVG = styled.svg`
  pointer-events: all;
  &:hover,
  &:active,
  &:focus {
    cursor: pointer;
  }
`;
//TODO add ids to the different pieces of the svg so you can target them and pass the theme colors instead of hardcoded
const Laptop: React.FC<{ login: () => void }> = ({ login }) => (
  <SVG
    onClick={() => login()}
    fill="none"
    height="248"
    viewBox="0 0 395 248"
    width="395"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m9 26c0-2.2091 1.7909-4 4-4h366c2.209 0 4 1.7909 4 4v207c0 8.284-6.716 15-15 15h-344c-8.2843 0-15-6.716-15-15z"
      fill="#dfdfdf"
    />
    <path
      d="m9 235.722v-209.7059c0-3.32 2.6961-6.0089 6.016-6l361.784.9673c3.391.0091 6.1 2.824 5.98 6.2127l-.162 4.5601c-.074 2.087-1.227 3.9853-3.046 5.0121l-361.622 204.1787c-3.9998 2.258-8.95-.632-8.95-5.225z"
      fill="#b2b2b2"
      opacity=".5"
    />
    <rect fill="#dfdfdf" height="22" rx="6" width="395" />
    <path d="m140 166h112v73h-112z" fill="#dfdfdf" />
    <path d="m141 167h110v71h-110z" fill="#fafafa" />
    <g fill="#474747">
      <path d="m50 139h24v18h-24z" />
      <path d="m84 139h23v18h-23z" />
      <path d="m118 139h23v18h-23z" />
      <path d="m252 139h23v18h-23z" />
      <path d="m151 139h90v18h-90z" />
      <path d="m285 139h58v18h-58z" />
      <path d="m108 115h23v18h-23z" />
      <path d="m172 115h23v18h-23z" />
      <path d="m205 115h23v18h-23z" />
      <path d="m237 115h23v18h-23z" />
      <path d="m269 115h23v18h-23z" />
      <path d="m301 115h42v18h-42z" />
    </g>
    <path
      d="m310.519 128.096c-.672 0-1.212-.196-1.62-.588-.408-.4-.612-.928-.612-1.584v-1.716c0-.688.204-1.24.612-1.656.408-.424.948-.636 1.62-.636h.984c.64 0 1.156.204 1.548.612s.588.948.588 1.62v1.056h-4.488v.72c0 .416.124.756.372 1.02.256.256.588.384.996.384h.912c.4 0 .724-.108.972-.324.248-.224.372-.52.372-.888h.84c0 .592-.2 1.072-.6 1.44-.4.36-.928.54-1.584.54zm2.256-3.636v-.312c0-.44-.116-.792-.348-1.056-.232-.272-.54-.408-.924-.408h-.984c-.408 0-.74.14-.996.42-.248.28-.372.648-.372 1.104v.252zm2.373-2.448h.84v.888c.184-.288.424-.524.72-.708s.592-.276.888-.276h.816c.552 0 .996.188 1.332.564.344.376.516.868.516 1.476v4.044h-.864v-4.068c0-.368-.092-.668-.276-.9s-.428-.348-.732-.348h-.768c-.376 0-.72.148-1.032.444-.304.296-.496.676-.576 1.14v3.732h-.864zm9.22 5.988c-.632 0-1.088-.136-1.368-.408-.272-.272-.408-.72-.408-1.344v-3.468h-1.056v-.768h1.056v-1.812h.864v1.812h1.56v.768h-1.56v3.468c0 .352.068.604.204.756.144.152.38.228.708.228h.648v.768zm4.034.096c-.672 0-1.212-.196-1.62-.588-.408-.4-.612-.928-.612-1.584v-1.716c0-.688.204-1.24.612-1.656.408-.424.948-.636 1.62-.636h.984c.64 0 1.156.204 1.548.612s.588.948.588 1.62v1.056h-4.488v.72c0 .416.124.756.372 1.02.256.256.588.384.996.384h.912c.4 0 .724-.108.972-.324.248-.224.372-.52.372-.888h.84c0 .592-.2 1.072-.6 1.44-.4.36-.928.54-1.584.54zm2.256-3.636v-.312c0-.44-.116-.792-.348-1.056-.232-.272-.54-.408-.924-.408h-.984c-.408 0-.74.14-.996.42-.248.28-.372.648-.372 1.104v.252zm2.373-2.448h.84v.924c.16-.28.4-.508.72-.684.328-.176.668-.264 1.02-.264h.528v.78h-.528c-.512 0-.928.164-1.248.492-.312.32-.468.748-.468 1.284v3.456h-.864z"
      fill="#fafafa"
    />
    <g fill="#474747">
      <path d="m50 115h49v18h-49z" />
      <path d="m140 115h23v18h-23z" />
      <path d="m95 91h23v18h-23z" />
      <path d="m126 91h23v18h-23z" />
      <path d="m157 91h23v18h-23z" />
      <path d="m188 91h23v18h-23z" />
      <path d="m219 91h23v18h-23z" />
      <path d="m250 91h23v18h-23z" />
      <path d="m312 91h31v18h-31z" />
      <path d="m281 91h23v18h-23z" />
      <path d="m50 91h37v18h-37z" />
      <path d="m274 66h69v18h-69z" />
      <path d="m106 67h23v18h-23z" />
      <path d="m78 67h23v18h-23z" />
      <path d="m50 67h23v18h-23z" />
      <path d="m134 67h23v18h-23z" />
      <path d="m162 67h23v18h-23z" />
      <path d="m190 66h23v18h-23z" />
      <path d="m218 66h23v18h-23z" />
      <path d="m246 66h23v18h-23z" />
      <path d="m50 43h25v14h-25z" />
      <path d="m83 43h25v14h-25z" />
      <path d="m117 43h25v14h-25z" />
      <path d="m150 43h25v14h-25z" />
      <path d="m184 43h25v14h-25z" />
      <path d="m217 43h25v14h-25z" />
      <path d="m251 43h25v14h-25z" />
      <path d="m284 43h25v14h-25z" />
      <path d="m318 43h25v14h-25z" />
    </g>
  </SVG>
);

export default Laptop;
