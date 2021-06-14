using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class updateFoodTable1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "tableId",
                table: "Food",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "tableId",
                table: "Food");
        }
    }
}
