import { Tab } from "@headlessui/react";
import { Content } from "../../../components";
import { clsx } from "clsx";
import { FarmData } from "./FarmData";
import { ChangePassword } from "./ChangePassword";
import { MyProducts } from "./MyProducts";
import { useUserProfile } from "../../../contexts/hooks";

const tabClassNames = (selected: boolean) =>
  clsx(
    "px-4 h-[42px] uppercase focus:outline-none",
    selected && "border-b-2 border-bazarek-green-main"
  );

export const ProfileSection = () => {
  const { profile, token, setUserProfile } = useUserProfile();
  console.log(profile);
  return (
    <Content title="Profile">
      <h1 className="uppercase">Profile</h1>
      <Tab.Group>
        <Tab.List className="mt-8 mb-4 border-b">
          <Tab className={({ selected }) => tabClassNames(selected)}>
            Dane gospodarstwa
          </Tab>
          <Tab className={({ selected }) => tabClassNames(selected)}>
            Zmiana hasła
          </Tab>
          <Tab className={({ selected }) => tabClassNames(selected)}>
            Twoje produkty
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {profile && (
              <FarmData
                user={profile}
                token={token}
                updateUser={(newProfile) => {
                  if (token) setUserProfile(token, newProfile);
                }}
              />
            )}
          </Tab.Panel>
          <Tab.Panel>
            <ChangePassword token={token} />
          </Tab.Panel>
          <Tab.Panel>
            <MyProducts />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Content>
  );
};
