import React, { FC } from 'react'

export const More:FC<any> = ({size=16}) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width={size} height={size}>
			<path d="M30 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zM30 44c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
		</svg>
	)
}
