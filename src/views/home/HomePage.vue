<template>
  <div class="columns">
    <div class="column is-4">
      <table class="table is-narrow">
        <tbody>
          <tr
            v-for="row in educations"
            :key="row.id"
            :class="trClass(row.start_date)"
          >
            <td
              class="has-text-black"
              @click="history.push(`/educations/${row.id}`)"
              role="gridcell"
            >
              {{ tinyDate(row.start_date) }}
            </td>
            <td
              class="has-text-black"
              @click="history.push(`/contacts/${row.contact_id}`)"
              role="gridcell"
            >
              {{ row.contact_name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="column is-4 is-offset-4">
      <table class="table is-narrow">
        <tbody>
          <tr
            v-for="row in practices"
            :key="row.id"
            :class="trClass(row.date_of_practice)"
          >
            <td
              class="has-text-black"
              @click="history.push(`/practices/${row.id}`)"
              role="gridcell"
            >
              {{ tinyDate(row.date_of_practice) }}
            </td>
            <td
              class="has-text-black"
              @click="history.push(`/kinds/${row.kind_id}`)"
              role="gridcell"
            >
              {{ row.kind_short_name }}
            </td>
            <td
              class="has-text-black"
              @click="history.push(`/companies/${row.company_id}`)"
              role="gridcell"
            >
              {row.company_name}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { GetList } from "@/services/fetcher";
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomePage",
  setup() {
    const educations = ref([]);
    const practices = ref([]);

    const store = useStore();
    const educationList = GetList();
    const practiceList = GetList();

    onMounted(() => {
      educationList.func("EducationNear");
      practiceList.func("PracticeNear");
    });

    const token = ref(store.getters.getToken);
    const auth = ref(store.getters.isAuth);

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

    // const educations = educationList.list.value ? educationList.list.value : [];
    // const practices = practiceList.list.value ? practiceList.list.value : [];

    return {
      educations,
      practices,
      trClass,
      tinyDate,
      token,
      auth,
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
