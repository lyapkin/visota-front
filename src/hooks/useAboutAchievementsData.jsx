import { useMemo } from "react"

const { useTranslation } = require("react-i18next")

const useAboutAchievementsData = () => {
    const { t } = useTranslation()

    const data = useMemo(() => (
        [
            {
                id: 1,
                count: '1 000 000',
                type: t('home:about.block1_type'),
                text: t('home:about.block1_text')
            },
            {
                id: 2,
                count: '1 800',
                type: t('home:about.block2_type'),
                text: t('home:about.block2_text')
            },
            {
                id: 3,
                count: '500',
                type: t('home:about.block3_type'),
                text: t('home:about.block3_text')
            },
            {
                id: 4,
                count: '14',
                type: t('home:about.block4_type'),
                text: t('home:about.block4_text')
            }
        ]
    ))

    return data
}

export default useAboutAchievementsData