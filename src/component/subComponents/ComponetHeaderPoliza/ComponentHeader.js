import React from 'react'
import { ContainerImage, ContainerTextInforme, Image, SubContainer, TextContainer, TextInforme, TitleMain } from '../../../theme/Styles'
import { DefaultButton } from '../../PolicyComponent/styles/PolicyStyles'

export const ComponentHeader = ({ title, bodyText, imagen, valor }) => {
  return (

    <ContainerImage>
      <SubContainer>
        <Image src={imagen} />
        <TextContainer >
          <span style={{ width: "240px", color: 'rgb(102, 102, 102)', margin: '15px' }}>
            <TitleMain >{title}</TitleMain>
          </span>
          <ContainerTextInforme><TextInforme>
            {bodyText}
          </TextInforme>
            {valor
              ? <div style={{ marginTop: '20px', textAlign: 'left' }}>


                <DefaultButton className="btnMore">
                  Aplica ahora
                </DefaultButton>
              </div>
              : null
            }

          </ContainerTextInforme>
        </TextContainer>

      </SubContainer>
    </ContainerImage>

  )
}
