<template>
  <div class="container">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column is-one-third">
          <table v-if="page.EducationShort" class="table" key="educations">
            <tbody>
              <tr
                v-for="(item, index) in page.EducationShort"
                :key="index"
                :class="trClass(item.start_date)"
              >
                <td>
                  <router-link :to="'/education/' + item.id">{{
                    tinyDate(item.start_date)
                  }}</router-link>
                </td>
                <td>
                  <router-link :to="'/contact/' + item.contact_id">{{
                    item.contact_name
                  }}</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column is-one-third is-offset-one-third">
          <table v-if="page.PracticeShort" class="table" key="practices">
            <tbody>
              <tr
                v-for="(item, index) in page.PracticeShort"
                :key="index"
                :class="trClass(item.date_of_practice)"
              >
                <td>
                  <router-link :to="'/practice/' + item.id">{{
                    tinyDate(item.date_of_practice)
                  }}</router-link>
                </td>
                <td>
                  <router-link :to="'/practice/' + item.id">{{
                    item.kind_short_name
                  }}</router-link>
                </td>
                <td>
                  <router-link :to="'/company/' + item.company_id">{{
                    item.company_name
                  }}</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "HomePage",
  setup() {
    const page = reactive({
      practicesFetched: false,
      educationsFetched: false,
      PracticeShort: [],
      EducationShort: [],
    });

    const trClass = (date: string) => {
      const m = new Date();
      const d = new Date(date);
      if (d < m) {
        return "tr-is-success";
      }
      m.setMonth(m.getMonth() + 1);
      return d < m ? "tr-is-danger" : "tr-is-warning";
    };

    const tinyDate = (date: string) => {
      if (date.length === 10) {
        const day = date.substring(8, 10);
        const month = date.substring(5, 7);
        const year = date.substring(2, 4);
        return `${day}.${month}.${year}`;
      }
      return date;
    };

    return {
      page,
      trClass,
      tinyDate,
    };
  },
});
</script>

<style scoped>
.tr-is-success,
.tr-is-success:hover {
  /* background-color: rgba(35, 209, 96, 0.5); */
  border-bottom: 2px solid #23d160;
}

.tr-is-warning,
.tr-is-warning:hover {
  /* background-color: rgba(255, 221, 87, 0.5); */
  border-bottom: 2px solid #ffdd57;
}

.tr-is-danger,
.tr-is-danger:hover {
  /* background-color: rgba(255, 56, 96, 0.5); */
  border-bottom: 2px solid #fc0032;
}

.tr-is-success:hover {
  background-color: rgba(35, 209, 96, 0.7);
}

.tr-is-warning:hover {
  background-color: rgba(255, 221, 87, 0.7);
}

.tr-is-danger:hover {
  background-color: rgba(255, 56, 96, 0.7);
}

tr a {
  color: #363636;
}
</style>
