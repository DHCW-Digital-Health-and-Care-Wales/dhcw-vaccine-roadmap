import clsx from "clsx";
type Group1065HelperProps = {
  additionalClassNames?: string;
};

function Group1065Helper({ additionalClassNames = "" }: Group1065HelperProps) {
  return (
    <div className={clsx("[grid-area:1_/_1] h-0 relative w-[491px]", additionalClassNames)}>
      <div className="absolute inset-[-3px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491 3">
          <line id="Line 25" stroke="var(--stroke-0, #364A73)" strokeWidth="3" x2="491" y1="1.5" y2="1.5" />
        </svg>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0 w-[491px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-[red] text-nowrap tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper1({ text, text1, additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("h-[57px] relative shrink-0 w-[491px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#d8dde0] border-solid inset-0 pointer-events-none" />
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[25px] justify-center leading-[0] left-[10px] text-[#212b32] text-[14px] top-[28.5px] tracking-[0.4px] translate-y-[-50%] w-[213px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{text}</p>
      </div>
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[25px] justify-center leading-[0] left-[482px] text-[#212b32] text-[14px] text-right top-[28.5px] tracking-[0.4px] translate-x-[-100%] translate-y-[-50%] w-[80px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{text1}</p>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0 w-[491px]">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#212b32] text-[14px] text-nowrap tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("font-['Roboto:Regular',sans-serif] font-normal h-[57px] leading-[0] relative shrink-0 text-[14px] tracking-[0.4px] w-[491px]", additionalClassNames)}>
      <div className="absolute flex flex-col h-[25px] justify-center left-[10px] top-[28.5px] translate-y-[-50%] w-[213px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{text}</p>
      </div>
      <div className="absolute flex flex-col h-[25px] justify-center left-[482px] text-right top-[28.5px] translate-x-[-100%] translate-y-[-50%] w-[80px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{text1}</p>
      </div>
    </div>
  );
}

export default function Colours() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[100px] items-start leading-[0] p-[100px] relative size-full" data-name="colours">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        <div className="[grid-area:1_/_1] bg-[#1b365d] h-[268px] ml-0 mt-0 w-[5600px]" />
        <p className="[grid-area:1_/_1] font-['Roboto:Black',sans-serif] font-black leading-[normal] ml-[98px] mt-[58px] relative text-[130px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          COLOURS
        </p>
      </div>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-0 mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Text
        </p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[571px] mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Background
        </p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[1142px] mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Borders `}</p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[1713px] mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Links
        </p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[2284px] mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Buttons
        </p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[2855px] mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Contextual helpers
        </p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[3426px] mt-0 relative text-[#212b32] text-[32px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Extended
        </p>
        <p className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal leading-[normal] ml-[3997px] mt-0 relative text-[32px] text-black text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Focus state
        </p>
        <Group1065Helper additionalClassNames="ml-0 mt-[39px]" />
        <Group1065Helper additionalClassNames="ml-[571px] mt-[40px]" />
        <Group1065Helper additionalClassNames="ml-[1142px] mt-[41px]" />
        <Group1065Helper additionalClassNames="ml-[1713px] mt-[42px]" />
        <Group1065Helper additionalClassNames="ml-[2284px] mt-[43px]" />
        <Group1065Helper additionalClassNames="ml-[2855px] mt-[44px]" />
        <Group1065Helper additionalClassNames="ml-[3426px] mt-[45px]" />
        <Group1065Helper additionalClassNames="ml-[3997px] mt-[46px]" />
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[47px] relative" data-name="Colour-helper">
          <Helper text="$text-default" text1="#212B32" additionalClassNames="bg-[#212b32] text-white" />
          <Text text="Primary text content" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[571px] mt-[47px] relative" data-name="Colour-helper">
          <Helper1 text="$background-grey" text1="#F0F4F5" additionalClassNames="bg-[#f0f4f5]" />
          <Text text="Page background" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[1142px] mt-[47px] relative" data-name="Colour-helper">
          <Helper text="$border-dark" text1="#212B32" additionalClassNames="bg-[#212b32] text-white" />
          <Text text="Active form components" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[1713px] mt-[47px] relative" data-name="Colour-helper">
          <Helper text="$link-default" text1="#005AA8" additionalClassNames="bg-[#005aa8] text-white" />
          <Text text="Default colour to signify interaction" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2284px] mt-[47px] relative" data-name="Colour-helper">
          <Helper text="$button-primary" text1="#1B365D" additionalClassNames="bg-[#1b365d] text-white" />
          <Text text="Primary call to actions" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2855px] mt-[47px] relative" data-name="Colour-helper">
          <Helper text="$error" text1="#D5281B" additionalClassNames="bg-[#d5281b] text-white" />
          <Text text="Error messages, form fields, delete icons" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[3426px] mt-[47px] relative" data-name="Colour-helper">
          <Helper text="$gold" text1="#D5281B" additionalClassNames="bg-[#aa8630] text-white" />
          <Text text="?" />
        </div>
        <div className="[grid-area:1_/_1] bg-[#ffeb3b] content-stretch flex font-['Roboto:Regular',sans-serif] font-normal gap-[100px] items-start leading-[0] ml-[3997px] mt-[47px] px-[10px] py-[16px] relative text-[14px] text-black tracking-[0.4px]">
          <div className="flex flex-col h-[25px] justify-center relative shrink-0 w-[291px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">$nhswales-focus-colour</p>
          </div>
          <div className="flex flex-col h-[25px] justify-center relative shrink-0 text-right w-[80px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">#FFEB3B</p>
          </div>
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[141px] relative" data-name="Colour-helper">
          <Helper text="$text-secondary" text1="#4C6272" additionalClassNames="bg-[#4c6272] text-white" />
          <Text text="Secondary text content, such as hint text" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[571px] mt-[141px] relative" data-name="Colour-helper">
          <Helper1 text="$background-white" text1="#FFFFFF" additionalClassNames="bg-white" />
          <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0 w-[491px]">
            <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[20px] min-h-px min-w-px relative shrink-0 text-[#212b32] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0">Content cards</p>
              <p>{`This is only used to make important information stand out and for alternating backgrounds, for example `}</p>
            </div>
          </div>
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[1142px] mt-[141px] relative" data-name="Colour-helper">
          <Helper text="$border-mid" text1="#4C6272" additionalClassNames="bg-[#4c6272] text-white" />
          <Text text="Form components" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[1713px] mt-[141px] relative" data-name="Colour-helper">
          <Helper text="$link-hover" text1="#7C2855" additionalClassNames="bg-[#7c2855] text-white" />
          <Text text="Links on hover" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2284px] mt-[141px] relative" data-name="Colour-helper">
          <Helper text="$button-secondary" text1="#4C6272" additionalClassNames="bg-[#4c6272] text-white" />
          <Text text="Secondary call to actions" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2855px] mt-[141px] relative" data-name="Colour-helper">
          <Helper text="$success" text1="#007F3B" additionalClassNames="bg-[#007f3b] text-white" />
          <Text text="Success, Positive or ‘On’ states" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[3426px] mt-[141px] relative" data-name="Colour-helper">
          <Helper text="$yellow-light" text1="#FFF9C4" additionalClassNames="bg-[#fff9c4] text-[#212b32]" />
          <Text text="Warning callout backgrounds" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[275px] relative" data-name="Colour-helper">
          <Helper text="$text-blue" text1="#1B365D" additionalClassNames="bg-[#1b365d] text-white" />
          <Text1 text="&nbsp;" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[571px] mt-[275px] relative" data-name="Colour-helper">
          <Helper text="$background-blue" text1="#1B365D" additionalClassNames="bg-[#1b365d] text-white" />
          <div className="content-stretch flex items-center px-[10px] py-[8px] relative shrink-0 w-[491px]">
            <div className="basis-0 flex flex-col font-['Roboto:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#212b32] text-[14px] tracking-[0.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[20px] mb-0">This is only used on interrupt or interstitial pages where the NHS Wales App is handing the user off to a third party site or application and the user needs to be informed they are accessing a different system within the app.</p>
              <p className="leading-[20px]">
                <span>{`This background will only be used inconjunction with `}</span>
                <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                  $nhswales-exceptional-text-colour
                </span>
                <span>{` and `}</span>
                <span className="font-['Roboto:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'wdth' 100" }}>
                  $nhswales-exceptional-button-light
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[1142px] mt-[275px] relative" data-name="Colour-helper">
          <Helper1 text="$border-light" text1="#D8DDE0" additionalClassNames="bg-[#d8dde0]" />
          <Text text="White content components on a grey page background" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[1713px] mt-[275px] relative" data-name="Colour-helper">
          <Helper text="$link-visited" text1="#330072" additionalClassNames="bg-[#330072] text-white" />
          <Text text="Visited links" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2284px] mt-[275px] relative" data-name="Colour-helper">
          <Helper text="$button-exceptional" text1="#F5BB6B" additionalClassNames="bg-[#f5bb6b] text-[#212b32]" />
          <div className="content-stretch flex items-center px-[10px] py-[8px] shrink-0 w-[491px]" />
        </div>
        <div className="[grid-area:1_/_1] font-['Roboto:Regular',sans-serif] font-normal h-[103px] leading-[0] ml-[2855px] mt-[275px] relative text-[14px] text-black tracking-[0.4px] w-[491px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[20px] mb-0">This is only to be used on interstitial or interrupt pages when positioned on a blue background.</p>
          <p className="leading-[20px]">
            <span>{`It is `}</span>
            <span className="font-['Roboto:ExtraBold',sans-serif] font-extrabold" style={{ fontVariationSettings: "'wdth' 100" }}>
              not
            </span>
            <span>{` to be used as a standard secondary button.`}</span>
          </p>
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[3426px] mt-[275px] relative" data-name="Colour-helper">
          <Helper text="$yellow" text1="#FFEB3B" additionalClassNames="bg-[#ffeb3b] text-[#212b32]" />
          <Text text="Focus background, warning information background" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-[469px] relative" data-name="Colour-helper">
          <Helper1 text="$text-white" text1="#FFFFFF" additionalClassNames="bg-white" />
          <Text1 text="&nbsp;" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2284px] mt-[469px] relative" data-name="Colour-helper">
          <Helper text="$button-warning" text1="#D5281B" additionalClassNames="bg-[#d5281b] text-white" />
          <Text text="Buttons to be used with caution - action can’t be undone" />
        </div>
        <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-[2284px] mt-[563px] relative" data-name="Colour-helper">
          <Helper1 text="$background-white" text1="#Hex" additionalClassNames="bg-white" />
          <Text text="White buttons on dark backgrounds" />
        </div>
      </div>
    </div>
  );
}