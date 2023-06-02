import styled from "styled-components"
import { SPACING, COLORS } from "../../utils/style/constants"

export const TextInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: ${SPACING.m};
`
export const Label = styled.label`
	padding-bottom: ${SPACING.xs};
`

export const Input = styled.input`
	font: unset;
	min-width: 300px;
	padding: ${SPACING.xs};
	border: ${SPACING.xs} solid ${COLORS.primary_freesia};
	border-radius: ${SPACING.s};

	&:focus {
		outline: 1px solid ${COLORS.primary_fuchsia};
	}
`
