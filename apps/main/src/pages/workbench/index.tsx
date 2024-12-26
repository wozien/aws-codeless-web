// import ProTable from './table'
import { css } from '@emotion/css';
import List from './list';

const classes = {
	workbench: css({}),
};

export default () => {
	return (
		<div className={classes.workbench}>
			<List />
		</div>
	);
};
