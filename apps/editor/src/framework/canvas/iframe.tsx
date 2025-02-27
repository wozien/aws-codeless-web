import ReactFrameComponent, {
	FrameContextConsumer,
} from 'react-frame-component';
import { css } from '@emotion/css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import {
	StyleProvider,
	createCache as createCacheByAntd,
} from '@ant-design/cssinjs';
// import { MantineProvider } from '@mantine/core';

// import styles from '@mantine/core/styles.css?raw';
// import stylelayer from '@mantine/core/styles.layer.css?raw';

interface IFrameProps {
	children?: React.ReactNode;
}

const classes = {
	iframe: css({
		border: 'none' /* 移除边框 */,
		margin: 0 /* 移除外边距 */,
		padding: 0 /* 移除内边距 */,
		width: '100%' /* 设置宽度为父容器的100% */,
		height: '100%' /* 设置高度为父容器的100% */,
	}),
};

export const IFrame: React.FC<IFrameProps> = (props) => {
	return (
		<ReactFrameComponent
			id="EditorFrame"
			head={
				<>
					<link
						type="text/css"
						href="https://cdn.skypack.dev/sanitize.css"
						rel="stylesheet"
					/>
					{/* <style
						dangerouslySetInnerHTML={{
							__html: styles,
						}}
					/>
					<style
						dangerouslySetInnerHTML={{
							__html: stylelayer,
						}}
					/> */}
					<style>
						{`
            .editor-component-active {
              position: relative;
            }
            
            .editor-component-active::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px solid #1677ff;
            }
            
            .editor-component-hover {
              position: relative;
            }
            
            .editor-component-hover::after {
              content: '';
              pointer-events: none;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: block;
              border: 1px dashed #1677ff;
              background: rgba(0, 0, 0, 0.1);
            }

            #ROOT {
              width: 100%;
              height: 100%;
            }
            
            `}
					</style>
				</>
			}
			className={classes.iframe}
		>
			<FrameContextConsumer>
				{({ document: _document }) => {
					const cache = createCache({
						key: 'iframe',
						container: _document?.head,
					});

					const antdCache = createCacheByAntd();
					return (
						<StyleProvider cache={antdCache} container={_document?.head}>
							<CacheProvider value={cache}>
								{/* <MantineProvider
									withCssVariables
									withGlobalClasses
									withStaticClasses
									getRootElement={() => _document?.documentElement}
									cssVariablesSelector="#EditorApp"
								>
									{props.children}
								</MantineProvider> */}
								{props.children}
							</CacheProvider>
						</StyleProvider>
					);
				}}
			</FrameContextConsumer>
		</ReactFrameComponent>
	);
};
