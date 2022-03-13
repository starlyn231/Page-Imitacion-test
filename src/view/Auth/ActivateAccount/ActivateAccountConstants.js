import { useTranslation } from 'react-i18next'
const [t, i18n] = useTranslation("global");

 <Container>
      <Image src={proLogo} />
      {
        matchesWidth ? (
          <MenuContainer>
            <MenuButton onClick={() => goToRoute("/")}>{t("start")}</MenuButton>
            <MenuDivider />
            <MenuButton onClick={() => goToRoute("/app/listOfServices/0")}>
              {t("service")}
            </MenuButton>
            <MenuDivider />
            <MenuButton onClick={() => goToRoute("/app/contact")}>
              {t("contact")}
            </MenuButton>
            <MenuDivider />

            <MenuDivider />
            {!authenticated ? (
              <Fragment>
                <MenuButton border padding onClick={() => goToRoute("/public/login")}>
                  {t("log-in")}
                </MenuButton>
                <MenuDivider />
                <TraslateComponent />
              </Fragment>
            ) : (
              <Fragment>
                <MenuButton onClick={() => goToRoute("/app/myDesk")}>
                  {t("desk")}
                </MenuButton>
                <MenuDivider />

                <LoggedInMenu />
                <div style={{ width: '0.5rem' }}></div>

                < Notifications color='black' />

                <MenuDivider />
                <TraslateComponent />
              </Fragment>
            )}

          </MenuContainer>
        ) : (
          <MenuContainer>
            <MenuButton
              color='inherit'
              startIcon={<MenuIcon style={{ fontSize: "40px" }} />}
              name='drawerState'
              onClick={() => setDrawerState(!drawerState)}
            />
            <TraslateButton
              color='inherit'
              startIcon={<TraslateComponent style={{ fontSize: "40px" }} />}
              name='drawerState'

            />

            <Drawer
              anchor={"right"}
              open={drawerState}
              onClose={() => setDrawerState(!drawerState)}
            >
              <DrawerList>
                <DrawerListItemContainer>
                  <DrawerListItemButton
                    color='inherit'
                    onClick={() => goToRoute("/")}
                  >
                    {t("start")}
                  </DrawerListItemButton>
                </DrawerListItemContainer>
                <DrawerListItemContainer>
                  <DrawerListItemButton
                    color='inherit'
                    onClick={() => goToRoute("/app/listOfServices/0")}
                  >
                    {t("services")}
                  </DrawerListItemButton>
                </DrawerListItemContainer>
                <DrawerListItemContainer>
                  <DrawerListItemButton
                    color='inherit'
                    onClick={() => goToRoute("/app/contact")}
                  >
                    {t("contact")}
                  </DrawerListItemButton>
                </DrawerListItemContainer>
                {!authenticated ? (
                  <DrawerListItemContainer>
                    <DrawerListItemButton
                      color='inherit'
                      onClick={() => goToRoute("/public/login")}
                    >
                      {t("log-in")}
                    </DrawerListItemButton>
                  </DrawerListItemContainer>

                ) : (
                  <DrawerListItemContainer>
                    <DrawerListItemButton
                      color='inherit'
                      onClick={() => goToRoute("/app/myDesk")}
                    >
                      {t("desk")}
                    </DrawerListItemButton>
                  </DrawerListItemContainer>
                )}
              </DrawerList>
            </Drawer>
          </MenuContainer>
        )
      }
    </Container >
  );
}

export default Header;
