<template>
<ul class="awards--list">
	<li class="award">
		<webby class="award--icon" aria-label="Webby Award"  />
	</li>
	<li class="award">
		<addy class="award--icon" aria-label="American Advertising Award (Addy)" />
	</li>
	<li class="award">
		<web-award class="award--icon" aria-label="Web Award" />
	</li>
</ul>
</template>

<script>
import Webby from '@/assets/img/awards/webby.svg';
import Addy from '@/assets/img/awards/addy.svg';
import WebAward from '@/assets/img/awards/webaward.svg';

export default {
	name: 'AwardsList',
	components: {
		Webby,
		Addy,
		WebAward
	}
}
</script>

<style scoped>
.awards--list {
	align-items: center;
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin-top: 0;
	padding: 0;

	& li {
		padding: 0 var(--step-0);

		&::before {
			content: "\200B";
			position: absolute;
		}
	}
}

.award--icon {
	width: var(--step-6);
}
</style>
